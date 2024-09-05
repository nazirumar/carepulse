import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getUser } from '@/lib/actions/patient.actions'
import RegisterForm from '@/components/forms/RegisterForm'

const Register= async ({params: {userid}}: SearchParamProps) =>{
    const user = await getUser(userid);
  return (
    <div className="flex h-screen max-h-screen">

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt='patient'
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit" />

            <RegisterForm user={user} />

            <div className="text-14-regular mt-200 flex justify-between">
              <p className="justify-item-end text-dark-600 xl:text-left">

            © 2024 CarePulse
              </p>
              <Link href="/?admin=true" className="text-green-500">
              Admin
              </Link>
            </div>
        </div>
      </section>
      <Image
      src="/assets/images/register-img.png"
      height={1000}
      width={1000}
      alt="patient"
      className="side-img max-w-[50%]"
      />


    </div>
  )
}

export default Register