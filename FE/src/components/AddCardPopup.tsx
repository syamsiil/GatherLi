import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Box,
  Text,
  Toast,
} from "@chakra-ui/react";
import { ICard } from "../interface/card";
import { API } from "../libs/api";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_THREADS } from "../stores/rootReducer";
import { RootState } from "stores/types/rootState";

export default function AddCardPopup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const dispatch = useDispatch();

  const [form, setForm] = useState<ICard>({
    content: "",
    image: "",
    title: "",
  });

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;
    if (files) {
      console.log("ini files", files[0]);
      const image = URL.createObjectURL(files[0]);
      //   setPreviewImage(image);
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      console.log("ini value", value);
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  async function getThreads() {
    const response = await API.get("/threads");
    dispatch(GET_THREADS(response.data));
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.content);

    if (form.image) {
      formData.append("image", form.image as string);
    }
    try {
      const response = await API.post("/cards", formData);


      console.log(response.data, "ini post");
      setForm({
        content: "",
        image: "",
        title: "",
      });

      //   setPreviewImage("");
      getThreads();
      onClose()
    } catch (err) {
      console.log("ini eror", err);
      Toast({
        title: "Coba Lagi",
        status: "error",
      });
    }
  };

  // async function handleDeleteAndFetch() {
  //   await handleSubmit(); // Menghapus kartu
  //   await getCards(); // Mengambil data yang diperbarui
  // }
  const auth = useSelector((state: RootState) => state.auth);
  useSelector



  return (
    <>
      <Box width={"200px"}>
        {auth.username === "admin" ? (
          <Button
            onClick={onOpen}
            variant="solid"
            bgColor={"teal"}
            width={"100%"}
            colorScheme="none"
            color={"white"}
            _hover={{
              bgColor: "teal.700",
            }}
          >
            Add
          </Button>
        ) : ""}

      </Box>

      <Box>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent
            bgImage={
              "https://ik.imagekit.io/lcfefbv0i/bg.svg?updatedAt=1696669804112"
            }
          >
            <ModalHeader>
              <Text color={"white"}>
                Add New Issue in Gather
                <Text as="span" color={"#83b735"}>
                  Li
                </Text>
                .
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Input an issue title"
                    type="text"
                    onChange={changeHandler}
                    color={"black"}
                    name="title"
                    value={form.title}
                    bg={"white"}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Input color={"black"} name="content" value={form.content} onChange={changeHandler} placeholder="Description" type="text" bg={"white"} />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Upload Image</FormLabel>
                  <Input name="image" placeholder="Upload Image" type="file" onChange={changeHandler} accept="image/*" bg={"white"} />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  type="submit"
                  width={"100%"}
                  padding={"5px 15px"}
                  border={"1px solid teal "}
                  borderRadius={"30px"}
                  bg={"white"}
                  color={"teal"}
                  _hover={{
                    bg: "teal",
                    color: "white",
                    border: "1px solid white",
                  }}
                  mr={3}
                >
                  Post
                </Button>
                <Button
                  onClick={onClose}
                  width={"100%"}
                  padding={"5px 15px"}
                  border={"1px solid teal "}
                  borderRadius={"30px"}
                  bg={"white"}
                  color={"teal"}
                  _hover={{
                    bg: "teal",
                    color: "white",
                    border: "1px solid white",
                  }}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}