import Head from 'next/head'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from '@/styles/ContatoForm.module.css';
import { api } from '@/lib/api';
import { toast } from 'react-toastify';

const sendContatoSchema = Yup.object().shape({
    email: Yup.string()
        .email('E-mail deve ser válido')
        .max(100, 'Máximo 100 caracteres')
        .required('Obrigatório'),
    name: Yup.string()
        .max(50, 'Máximo 50 caracteres')
        .required('Digite seu nome'),
    phone: Yup.string()
        .max(15, 'Máximo 15 caracteres')
        .required('Obrigatório'),
    company: Yup.string()
        .max(100, 'Máximo 100 caracteres'),
    message: Yup.string().required('Digite sua mensagem').max(250, 'Máximo de 250 caracteres'),
});

const FieldError = ({ children }) => (<div className={styles.fieldError}>{children}</div>)

export default function MeusProjetos() {

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    };

    const handleOnSubmit = async (values, { resetForm, setStatus }) => {
        try {
            const response = await api.post('/contato', {
                name: values.name,
                email: values.email,
                phone: values.phone,
                company: values.company,
                message: values.message,
            });

            resetForm();

            // setStatus('Contato Enviado');
            toast(`Contato enviado`);
        } catch (error) {
            console.error(error);
            toast(`Erro ao enviar contato`);
        }
    };

    return (
        <div>
            <Head>
                <title>Contato - Desenvolvedor Web - Ariel</title>
            </Head>
            <section className="container">
                <h1 className="text-center text-5xl text-primary font-black">Contato</h1>

                <div className="max-w-lg p-4 mt-20 mb-14 mx-auto bg-dark-lighter rounded-xl shadow-xl text-white">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={sendContatoSchema}
                        onSubmit={handleOnSubmit}
                    >
                        {({ isSubmitting, isValid, errors, touched, dirty, status }) => (

                            <Form>
                                <div className="lg:grid grid-cols-2 gap-4">
                                    <div className={styles.fieldWrapper}>
                                        <label className="flex flex-col">
                                            <span className={styles.fieldRequired}>
                                                Nome
                                            </span>
                                            <Field
                                                name="name"
                                                type="text"
                                                placeholder="Nome"
                                                className={errors.name && touched.name ? styles.invalid : ''} />
                                        </label>
                                        <FieldError>
                                            {errors.name && touched.name ? errors.name : null}
                                        </FieldError>
                                    </div>

                                    <div className={styles.fieldWrapper}>
                                        <label className="flex flex-col">
                                            <span className={styles.fieldRequired}>
                                                E-mail
                                            </span>
                                            <Field
                                                name="email"
                                                type="email"
                                                placeholder="E-mail"
                                                className={errors.email && touched.email ? styles.invalid : ''} />
                                        </label>
                                        <FieldError>
                                            {errors.email && touched.email ? errors.email : null}
                                        </FieldError>
                                    </div>
                                </div>

                                <div className="lg:grid grid-cols-2 gap-4">
                                    <div className={styles.fieldWrapper}>
                                        <label className="flex flex-col">
                                            <span className={styles.fieldRequired}>
                                                Telefone
                                            </span>
                                            <Field
                                                name="phone"
                                                type="tel"
                                                placeholder="Telefone"
                                                className={errors.phone && touched.phone ? styles.invalid : ''}
                                            />
                                        </label>
                                        <FieldError>
                                            {errors.phone && touched.phone ? errors.phone : null}
                                        </FieldError>
                                    </div>

                                    <div className={styles.fieldWrapper}>
                                        <label className="flex flex-col">
                                            <span>
                                                Empresa
                                            </span>
                                            <Field
                                                name="company"
                                                placeholder="Empresa"
                                                type="text"
                                                className={errors.company && touched.company ? styles.invalid : ''}
                                            />
                                        </label>
                                        <FieldError>
                                            {errors.company && touched.company ? errors.company : null}
                                        </FieldError>
                                    </div>
                                </div>

                                <div className={styles.fieldWrapper}>
                                    <label className="flex flex-col">
                                        <span className={styles.fieldRequired}>
                                            Mensagem
                                        </span>
                                        <Field
                                            name="message"
                                            as="textarea"
                                            placeholder="Messagem"
                                            className={errors.message && touched.message ? styles.invalid : ''}
                                            rows={3}
                                        />
                                    </label>
                                    <FieldError>
                                        {errors.message && touched.message ? errors.message : null}
                                    </FieldError>
                                </div>

                                <button type="submit" disabled={isSubmitting || !isValid} className={styles.submit}>
                                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                                </button>

                                {status &&
                                    <div className="bg-green-500 rounded-lg border border-green-500 p-2 mt-4 text-center">
                                        {status}
                                    </div>
                                }
                            </Form>
                        )}
                    </Formik>
                </div>

            </section>
        </div>
    )
}