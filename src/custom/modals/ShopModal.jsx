import React from 'react';
import st from "./ShopModal.module.scss";
import { Modal } from "@mui/material";

const ShopModal = ({isOpen})=>{
    return (
        <Modal
            open={isOpen}
            aria-describedby={st.content}
        >
            <div className={st.wrapper}>
                <div className={st.content}>Товар добавлен в корзину!</div>
                {/*<button onClick={handleClose}>Ok</button>*/}
            </div>
        </Modal>
    );
};

export default ShopModal;