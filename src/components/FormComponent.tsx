import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post-validator";
import {apiService} from "../services/api.service";
import {IForm} from "../models/IForm";

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
        console.log(await apiService.post.savePost(dataFromForms));
    };
    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <div>
                <label>
                    <input type="text" placeholder={'Title'} {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
            </div>
            <div>
                <label>
                    <input type="text" placeholder={'Body'} {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>
            </div>
            <div>
                <label>
                    <input type="number" placeholder={'UserId'} {...register('userId')}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>
            </div>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default FormComponent;