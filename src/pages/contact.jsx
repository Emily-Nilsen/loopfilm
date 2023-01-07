import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - LoopFilm</title>
      </Head>
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
    </>
  )
}
