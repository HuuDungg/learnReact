import React, { useState } from 'react';
import { Button, Input, InputNumber, Modal } from 'antd';
import { createBook } from '../../service/api.book';
const CreateBook = (props) => {
    const { isFormCreate, setIsFormCreate } = props;

    // Khai báo các state tương ứng
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [genre, setGenre] = useState('');

    const handleCreate = async () => {
        const res = await createBook(title, author, price, quantity, genre);
        console.log('check data create ', res)
        setIsFormCreate(false);
    }

    return (
        <>
            <Button
                onClick={() => { setIsFormCreate(true) }}
            >Create</Button>
            <Modal
                title="Create new book"
                open={isFormCreate}
                okText={'Add'}
                onOk={() => { handleCreate() }}
                onCancel={() => { setIsFormCreate(false) }}
            >
                <div>
                    <span>Title</span>
                    <Input
                        value={title}
                        onChange={(event) => { setTitle(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Author</span>
                    <Input
                        value={author}
                        onChange={(event) => { setAuthor(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Price</span>
                    <Input
                        type="number"
                        value={price}
                        onChange={(event) => { setPrice(parseFloat(event.target.value)) }}
                    />
                </div>
                <div>
                    <span>Quantity</span> <br />
                    <Input
                        value={quantity}
                        onChange={(value) => { setQuantity(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Genre</span>
                    <Input
                        value={genre}
                        onChange={(event) => { setGenre(event.target.value) }}
                    />
                </div>
            </Modal>
        </>
    )
}

export default CreateBook;
