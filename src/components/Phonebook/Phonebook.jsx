import { Form,Label,Button,Input } from './Phonebook.styled';
import { Formik } from 'formik';

export const Phonebook = () => {

    const initialValues = {
        name: '',
        tel: '',
    };

    const handelSabmit = (values,actions) => { 
        
    };

    return <Formik
        initialValues={initialValues}
        onSubmit={handelSabmit}
        >
        <Form action="">
            <Label htmlFor="text">Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Label>
            <Label htmlFor="tel">Number
                <Input type="tel" name="tel"/>
            </Label>  
            <Button type='submit' >Add contact</Button>
        </Form>
    </Formik> ;

}