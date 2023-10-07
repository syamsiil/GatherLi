import { CSSProperties } from "react";
import { PropagateLoader } from "react-spinners";

const override: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
};

export default function Loading() {
    return (
        <div>
            <PropagateLoader cssOverride={override}
                color={"#36D7B7"} loading={true} size={20} />
        </div>
    );

}


