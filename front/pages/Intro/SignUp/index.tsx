import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Input from '@components/Input';
import { useForm } from 'react-hook-form';
import { useTheme } from '@emotion/react';
import { Button, REG_EMAIL, REG_PHONE } from '@pages/Intro/SignIn';
import { Base } from '@pages/Intro/SignIn';
import SocialLinks from '@components/SocialLinks';
import fetcher from '@utils/fetcher';
import axios from 'axios';

interface IForm {
  id: string; //email, nickname, phone
  nickname: string;
  password: string;
}

const SignUp = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>({ defaultValues: { id: '', nickname: '', password: '' }, mode: 'onChange' });

  const { id, nickname, password } = watch();

  const onSubmit = useCallback((data: IForm) => {
    const submitData = { ...data, submit: true };
    axios.post('/api/user/sign_up', submitData, { withCredentials: true }).then((res) => console.log(res.data));
  }, []);

  return (
    <Base theme={theme}>
      <div className={'container'}>
        <div className={'header'}>
          <h1>회원가입</h1>
          <span className={'link'}>
            이미 회원이신가요? <Link to={'/sign_up'}>로그인</Link>
          </span>
        </div>
        <div className={'form-wrapper'}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type={'text'}
              label={'이메일 또는 휴대번호'}
              register={register('id', {
                required: true,
                validate: { positive: (value) => REG_EMAIL.test(value) || REG_PHONE.test(value) },
              })}
              isValue={Boolean(id)}
              error={Boolean(errors.id) || Boolean(errors.id?.message)}
            />
            <Input
              type={'text'}
              label={'닉네임'}
              register={register('nickname', {
                required: true,
              })}
              isValue={Boolean(nickname)}
              error={Boolean(errors.nickname) || Boolean(errors.nickname?.message)}
            />
            <Input
              className={'input'}
              type={'password'}
              label={'패스워드'}
              register={register('password', {
                required: true,
                validate: {
                  positive: (value) => value.length >= 6,
                },
              })}
              isValue={Boolean(password)}
              error={Boolean(errors.password) || Boolean(errors.password?.message)}
            />
            <Button
              type={'submit'}
              disabled={
                !id ||
                !nickname ||
                !password ||
                Boolean(errors.id) ||
                Boolean(errors.nickname) ||
                Boolean(errors.password)
              }
            >
              가입하기
            </Button>
          </form>
        </div>
        <div className={'social-links-wrapper'}>
          <SocialLinks />
        </div>
      </div>
    </Base>
  );
};

export default SignUp;
