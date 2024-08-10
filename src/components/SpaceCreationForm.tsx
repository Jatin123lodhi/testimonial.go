import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import FileInput from "./FileInput";
import QuestionList from "./QuestionList";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FormSchemaType } from "@/types";
import { collectionTypeOptions } from "@/constants";

interface ISpaceCreationFormProps {
  form: UseFormReturn<FormSchemaType>;
  spaceConfigurationType: string;
  onSubmit: () => void;
}

const SpaceConfigurationForm = (props: ISpaceCreationFormProps) => {
  const { form, spaceConfigurationType, onSubmit } = props;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        form.setValue("spaceLogo", reader.result as string);
        form.clearErrors("spaceLogo");
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemove = () => {
    form.setValue("spaceLogo", "");
  };

  const handleAddQuestion = () => {
    if (form.getValues("questions").length <= 4)
      form.setValue("questions", [
        ...form.getValues("questions"),
        { id: Date.now(), text: "" },
      ]);
  };
  const handleDeleteQuestion = (id: number) => {
    form.setValue(
      "questions",
      form.getValues("questions").filter((q) => q.id !== id)
    );
  };
  const handleQuestionUpdate = (id: number, value: string) => {
    const updatedQues = form
      .getValues("questions")
      .map((q) => (q.id === id ? { ...q, text: value } : q));
    form.setValue("questions", updatedQues);
  };

  const onFormSubmit = (formData: FormSchemaType) => {
    console.log(formData);
    if (spaceConfigurationType === "new") {
      console.log("new space created");
    } else {
      console.log("space edited ");
    }
    onSubmit();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-8">
        {/* space name  */}
        <FormField
          control={form.control}
          name="spaceName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Space name </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription className="text-xs">
                Public URL is: testimonial.to/your-space
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* space logo  */}
        <FormField
          control={form.control}
          name="spaceLogo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Space logo</FormLabel>
              <FormControl>
                <FileInput
                  imageUrl={field.value}
                  onChange={handleFileChange}
                  onRemove={handleRemove}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* header title  */}
        <FormField
          control={form.control}
          name="headerTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Header title </FormLabel>
              <FormControl>
                <Input
                  placeholder="Would you like to give a shoutout for xyz?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* message  */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your custom message </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a warm message to your customers, and give them simple directions on how to make the best testimonial."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* questions  */}
        <FormField
          control={form.control}
          name="questions"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <QuestionList
                  questions={field.value}
                  handleAddQuestion={handleAddQuestion}
                  handleDeleteQuestion={handleDeleteQuestion}
                  handleQuestionUpdate={handleQuestionUpdate}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Collection type  */}
        <FormField
          control={form.control}
          name="collectionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block">Collection type</FormLabel>
              <FormControl>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button type="button" variant="outline">
                      {field.value} <ChevronDown className="ml-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuRadioGroup
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                    >
                      {collectionTypeOptions.map((option) => (
                        <DropdownMenuRadioItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* star rating  */}
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block"> Collect star ratings </FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-readonly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {spaceConfigurationType === "new" ? (
          <button
            className="text-white p-2 text-center bg-indigo-600 w-full"
            type="submit"
          >
            Create new Space
          </button>
        ) : (
          <button
            className="text-white p-2 text-center bg-indigo-600 w-full"
            type="submit"
          >
            Update Space
          </button>
        )}
      </form>
    </Form>
  );
};

export default SpaceConfigurationForm;
