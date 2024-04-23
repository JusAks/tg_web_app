import React from 'react';
import st from './Test.module.scss'
import { Modal } from "@mui/material";

const Test = ()=>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        setTimeout(handleClose,1000);
    };
    const handleClose = () => setOpen(false);
    return (
        <div>
            <button onClick={handleOpen}>Open modal</button>
            <Modal
                open={open}
                
                aria-describedby={st.content}
            >
                <div className={st.wrapper}>
                    <div className={st.content}>Товар добавлен в корзину!</div>
                    <button onClick={handleClose}>Ok</button>
                </div>
            </Modal>
        </div>
    );
};

export default Test;