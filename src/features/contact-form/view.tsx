"use client";

import { Flex } from "@mantine/core";
import { useForm } from "@mantine/form";

import { useTranslations } from "next-intl";

import { BtnBasic, InputBasic, TextAreaBasic } from "@/shared/ui";

const TOKEN = "8127852839:AAHNyyDw5FDiBZ0ltqlCNiRBPReBBqq6cJk";
const CHAT_ID = "8451394639";
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const ContactForm = () => {
  const t = useTranslations("contactForm");
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      phone: "",
      topic: "",
      message: "",
    },
  });

  const handleSubmitted = (values: typeof form.values) => {
    const text = `
    📩 Получена новая форма:\n
    👤 Имя: ${values.name}\n
    📧 Телефон: ${values.phone}\n
    📍 Тема: ${values.topic || "Нет сообщения"}\n
    💬 Сообщение: ${values.message || "Нет сообщения"}
    `;

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "HTML",
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        form.reset();
        alert(t("success_message"));
        return res.json();
      })
      .catch((err) => alert("Error: " + err));
  };

  return (
    <Flex
      direction={"column"}
      gap={"lg"}
      w={"100%"}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        form.onSubmit(handleSubmitted)();
      }}
    >
      <InputBasic
        label={t("labelName")}
        placeholder={t("placeholderName")}
        type="text"
        required
        key={"name"}
        {...form.getInputProps("name")}
      />
      <InputBasic
        label={t("labelPhone")}
        placeholder={t("placeholderPhone")}
        type="tel"
        required
        key={"phone"}
        {...form.getInputProps("phone")}
      />
      <InputBasic
        label={t("labelTopic")}
        placeholder={t("placeholderTopic")}
        type="text"
        key={"topic"}
        {...form.getInputProps("topic")}
      />
      <TextAreaBasic
        label={t("labelMessage")}
        placeholder={t("placeholderMessage")}
        key={"message"}
        {...form.getInputProps("message")}
      />
      <BtnBasic
        fullWidth
        size="md"
        type="submit"
        loading={form.submitting}
      >
        {t("buttonSend")}
      </BtnBasic>
    </Flex>
  );
};
