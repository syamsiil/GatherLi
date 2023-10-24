import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Card } from "../entities/Card";
import cloudinaryConfig from "../libs/config";
import { v2 as cloudinary } from "cloudinary";
import { Request, Response } from "express";

class CardServices {
  private readonly cardRepository: Repository<Card> =
    AppDataSource.getRepository(Card);

  async find(reqQuery?: any, loginSession?: any): Promise<any> {
    try {
      const limit = parseInt(reqQuery.limit ?? 0);

      const card = await this.cardRepository.find({
        relations: ["user"],
        order: {
          id: "DESC",
        },
        take: limit,
      });

      return card.map((element) => ({
        id: element.id,
        content: element.content,
        image: element.image,
        user: element.user,
        title: element.title,
      }));
    } catch (err) {
      throw new Error("error find cards");
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const card = await this.cardRepository.findOne({
        where: {
          id,
        },
        relations: ["user"],
      });

      return {
        id: card.id,
        title: card.title,
        image: card.image,
        content: card.content,
      };
    } catch (err) {
      throw new Error("error findOne card");
    }
  }

  async delete(id: number): Promise<any> {
    try {
      const card = await this.cardRepository.findOne({
        where: {
          id,
        },
        relations: ["user"],
      });

      const card1 = await this.cardRepository.delete({
        id: card.id,
      });
      return console.log("berhasil delete");
    } catch (err) {
      throw new Error("error delete produck");
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const loginSession = res.locals.loginSession;
      const filename = res.locals.filename;
      console.log("ini data :", data);
      console.log("ini login:", loginSession);
      console.log("ini filename :", filename);

      cloudinaryConfig();
      if (filename) {
        const cloudinaryResponse = await cloudinary.uploader.upload(
          "./uploads/" + filename
        );
        console.log("ini cloudinary : ", cloudinaryResponse);

        const thread = this.cardRepository.create({
          content: data.content,
          image: cloudinaryResponse.secure_url,
          title: data.title,
          user: loginSession.user.id,
        });

        const createThread = this.cardRepository.save(thread);
        return res.status(200).json(createThread);
      } else {
        const thread = this.cardRepository.create({
          content: data.content,
          user: loginSession.id,
        });

        const createThread = this.cardRepository.save(thread);
        return res.status(200).json(createThread);
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Error while getting threads" });
    }
  }
}

export default new CardServices();
