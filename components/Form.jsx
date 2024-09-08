import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { sendMail } from "@/lib/mail";

const Form = () => {
  const send = async (formData) => {
    "use server";
    await sendMail(
      formData.get("name"),
      formData.get("email"),
      formData.get("message"),
    );
  };
  return (
    <form className="flex flex-col gap-y-4" action={send}>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" name="name" placeholder="Name" required />
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
        />
        <MailIcon size={20} className="absolute right-6" />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea placeholder="Type Your Message" name="message" required />
        <MessageSquare size={20} className="absolute right-6 top-4" />
      </div>
      <Button type="submit" className="flex max-w-[166px] items-center gap-x-1">
        Let's Talk
        <ArrowRightIcon size={20} className="ml-2" />
      </Button>
    </form>
  );
};

export default Form;
