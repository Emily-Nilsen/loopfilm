import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Header } from '@/components/Header'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { OurOffices } from '@/components/OurOffices'

export default function Contact() {
  return (
    <main className="w-full h-full">
      <Head>
        <title>Contact Us - LoopFilm</title>
      </Head>
      <Header />
      <AuthLayout
        title="Get in touch"
        subtitle="We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible."
      >
        <form>
          <div className="grid grid-cols-2 gap-6">
            <TextField
              label="First name"
              id="first_name"
              name="first_name"
              type="text"
              autoComplete="given-name"
              required
            />
            <TextField
              label="Last name"
              id="last_name"
              name="last_name"
              type="text"
              autoComplete="family-name"
              required
            />
            <TextField
              className="col-span-full"
              label="Email address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />

            <SelectField
              className="col-span-full"
              label="How can we help you?"
              id="referral-source"
              name="referral_source"
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </SelectField>
          </div>
          <Button type="submit" color="rose" className="w-full mt-8">
            Contact us
          </Button>
        </form>
      </AuthLayout>
      <div className="absolute inset-0 bg-gray-800">
        <Image
          fill
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1672749093/Loop%20Film/003528_Tofoto_www.nordnorge.com_a4ygqu.jpg"
          alt="Beautiful Norway"
        />
        <div className="absolute top-0 h-[50vh] w-full bg-gradient-to-b from-black/80"></div>
        <div className="absolute bottom-0 flex h-[50vh] w-full items-end bg-gradient-to-t from-black/80">
          <OurOffices />
        </div>
      </div>
    </main>
  )
}
