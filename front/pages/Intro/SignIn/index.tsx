import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Link, Redirect } from 'react-router-dom';
import Input from '@components/Input';
import { useForm } from 'react-hook-form';
import { useTheme } from '@emotion/react';
import SocialLinks from '@components/SocialLinks';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

export const Base = styled.div<{ [key: string]: any }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > .container {
    min-width: 400px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 20px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 10px;
    background-color: #fff;

    > .header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 60px;
      > h1 {
        font-size: 24px;
      }

      > .link {
        font-size: 13px;
        color: gray;
        > a {
          color: ${({ theme }) => theme.colors.blue[600]};
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    > .form-wrapper {
      > form {
        > div {
          margin-bottom: 10px;
        }
      }
    }

    > .social-links-wrapper {
    }
  }
`;

export const Button = styled.button<{ disabled: boolean }>`
  height: 50px;
  font-size: 14px;
  width: 100%;
  margin: 10px 0 40px;
`;

interface IForm {
  id: string; //email, nickname, phone
  password: string;
}

export const REG_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
export const REG_PHONE = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/i;

const SignIn = () => {
  const theme = useTheme();
  const { data: userData, mutate: userDataMutate } = useSWR('/api/user', fetcher);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    resetField,
  } = useForm<IForm>({ defaultValues: { id: '', password: '' }, mode: 'onChange' });

  const { id, password } = watch();

  const onSubmit = useCallback((data: IForm) => {
    axios
      .post('/api/user', data)
      .then((res) => {
        console.log(data);
        reset();
        userDataMutate();
      })
      .catch((error) => console.error(error));
  }, []);

  // if (!userData || userData === 0) return <div>로딩중...</div>;
  if (userData) return <Redirect to={'/browse/clubs'} />;

  return (
    <Base theme={theme}>
      <div className={'container'}>
        <div className={'header'}>
          <h1>로그인</h1>
          <span className={'link'}>
            이미 회원이신가요? <Link to={'/sign_up'}>회원가입</Link>
          </span>
        </div>
        <div className={'form-wrapper'}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type={'text'}
              label={'닉네임, 이메일 또는 휴대번호'}
              register={register('id', {
                required: true,
                validate: { positive: (value) => REG_EMAIL.test(value) || REG_PHONE.test(value) },
              })}
              isValue={Boolean(id)}
              error={Boolean(errors.id) || Boolean(errors.id?.message)}
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
            <Button type={'submit'} disabled={!id || !password || Boolean(errors.id) || Boolean(errors.password)}>
              Club 입장하기
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

export default SignIn;
