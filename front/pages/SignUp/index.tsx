import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Link, Redirect } from 'react-router-dom';
import Input from '@components/Inputs/Input';
import { useForm } from 'react-hook-form';
import { useTheme } from '@emotion/react';
import { Button, REG_EMAIL, REG_PHONE } from '@pages/SignIn';
import { Base } from '@pages/SignIn';
import SocialLinks from '@components/SocialLinks';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import SignUpSuccessModal from '@components/SignUpSuccessModal';
import useSWR from 'swr';

interface IForm {
  id: string; //email, nickname, phone
  nickname: string;
  password: string;
}

const SignUp = () => {
  // const { data: userData, mutate: userDataMutate } = useSWR('/api/user', fetcher);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<IForm>({ defaultValues: { id: '', nickname: '', password: '' }, mode: 'onChange' });

  const theme = useTheme();
  const { id, nickname, password } = watch();
  const [showModal, setShowModal] = useState({ showWelcomeModal: false });
  const onCloseModal = useCallback(() => {
    setShowModal({ showWelcomeModal: false });
  }, []);

  const onSubmit = useCallback((data: IForm) => {
    const submitData = { ...data, submit: true };
    axios
      .post('/api/user/sign_up', submitData, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        reset();
        setShowModal({ showWelcomeModal: true });
      })
      .catch((error) => console.error(error));
  }, []);

  // if (userData) return <Redirect to={'/'} />;

  return (
    <>
      <Base theme={theme}>
        <div className={'container'}>
          <div className={'header'}>
            <h1>회원가입</h1>
            <span className={'link'}>
              이미 회원이신가요? <Link to={'/sign_in'}>로그인</Link>
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
      <SignUpSuccessModal show={showModal.showWelcomeModal} onCloseModal={onCloseModal} />
    </>
  );
};

export default SignUp;
