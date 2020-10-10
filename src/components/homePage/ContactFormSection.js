import React from 'react'
import { FormSection, Form, LabelAndInputWrapper, Label, Input, TextArea, SubmitInput } from '../../elements/homePageElements/ContactFormElements'
import { H2 } from '../../elements/homePageElements/H2'

export default function ContactFormSection() {
    return (
        <FormSection>
            <H2>Get in Touch</H2>
            <span>Request a quote or ask me a question :)</span>
            <ContactForm />
        </FormSection>
    )
}

const FormInput = ({ name, id = `${name}-id`, title, ...props }) => (
    <LabelAndInputWrapper>
        <Label for={id}>{title}</Label>
        <Input id={id} name={name} type={name} {...props} />
    </LabelAndInputWrapper>
)

const MessageInput = ({ name, id = `${name}-id`, title = "Message", ...props }) => (
    <LabelAndInputWrapper>
        <Label for={id}>{title}</Label>
        <TextArea id={id} name={name} {...props} />
    </LabelAndInputWrapper>
)

const ContactForm = () => (
    <Form>
        <FormInput name="name" title="Name" />
        <FormInput name="email" title="Email" />
        <MessageInput name="message" title="Message" />
        <SubmitInput />
    </Form>
)