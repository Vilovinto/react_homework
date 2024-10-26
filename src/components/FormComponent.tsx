import React from 'react';
import {useForm} from "react-hook-form";

const FormComponent = () => {
    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }
    } = useForm<IForm>({mode: 'all', resolver: joiResolver(postValidator)});
    const customHandler = async (dataFromForms: IForm) => {
        console.log(await api.Service.post.savePost(dataFromForms));
    };
    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <div>
                <label>
                    <input type="text" placeholder={'title'} {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
            </div>
            <div>
                <label>
                    <input type="text" placeholder={'body'} {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>
            </div>
            <div>
                <label>
                    <input type="number" placeholder={'userId'} {...register('userId')}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>
            </div>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default FormComponent;