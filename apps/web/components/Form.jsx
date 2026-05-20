"use client";
import { Loader2 } from "lucide-react";
import { useActionState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { submitContactForm } from "@/app/actions";
import Turnstile from "react-turnstile";

const Form = () => {
  const [state, action, pending] = useActionState(submitContactForm, null);

  const isSuccess = state?.message === "success";
  const isError = state?.message === "error";

  return (
    <>
      {!isSuccess && (
        <form action={action} className="flex flex-col gap-y-4">
          {/* input */}
          <div className="relative flex items-center">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              autoComplete="name"
              aria-label="Name"
            />
            <User size={20} className="absolute right-6" />
          </div>
          {/* input */}
          <div className="relative flex items-center">
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="email"
              aria-label="Email"
            />
            <MailIcon size={20} className="absolute right-6" />
          </div>
          {/* textarea */}
          <div className="relative flex items-center">
            <Textarea
              placeholder="Type Your Message"
              name="message"
              required
              aria-label="Message"
            />
            <MessageSquare size={20} className="absolute right-6 top-4" />
          </div>

          <Turnstile
            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            responseField={true}
            responseFieldName="turnstileToken"
            fixedSize={true}
            refreshExpired="auto"
            theme="auto"
          />
          
          {!pending && (
            <Button
              type="submit"
              className="flex max-w-[166px] items-center gap-x-1"
            >
              Let's Talk
              <ArrowRightIcon size={20} className="ml-2" />
            </Button>
          )}
          {pending && (
            <Button
              disabled
              className="flex max-w-[166px] items-center gap-x-1"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </Button>
          )}
        </form>
      )}
      {isSuccess && (
        <p className="text-green-500 xl:text-center">
          Message sent successfully! We will get back to you soon.
        </p>
      )}
      {isError && (
        <div className="text-center">
          <p className="text-red-500 font-semibold">
            Failed to send the message.
          </p>
          {state?.error && (
            <p className="text-red-400 text-sm mt-1">
              {state.error}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Form;
