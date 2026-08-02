/*
  PATH src/components/componentsPage/ComponentFormExample.tsx
*/

import { useTranslation } from "react-i18next";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Field from "../ui/Field";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Select from "../ui/Select";
import ComponentExampleSection from "./ComponentExampleSection";

const ComponentFormExample = () => {
  const { t } = useTranslation();

  const subjectOptions = [
    {
      label: t("pages.components.form.subject.options.general"),
      value: "general",
    },
    {
      label: t("pages.components.form.subject.options.support"),
      value: "support",
    },
    {
      label: t("pages.components.form.subject.options.billing"),
      value: "billing",
    },
  ];

  return (
    <ComponentExampleSection title={t("pages.components.sections.form")}>
      <Card>
        <Card.Content>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Form.Header>
              <Form.Title>{t("pages.components.form.title")}</Form.Title>
              <Form.Description>{t("pages.components.form.description")}</Form.Description>
            </Form.Header>

            <Form.Grid columns={2}>
              <Field label={t("pages.components.form.name.label")} required>
                <Input placeholder={t("pages.components.form.name.placeholder")} />
              </Field>

              <Field
                label={t("pages.components.form.email.label")}
                required
                error={t("pages.components.form.email.error")}
              >
                <Input type="email" placeholder={t("pages.components.form.email.placeholder")} />
              </Field>
            </Form.Grid>

            <Field
              label={t("pages.components.form.subject.label")}
              hint={t("pages.components.form.subject.hint")}
            >
              <Select
                placeholder={t("pages.components.form.subject.placeholder")}
                options={subjectOptions}
              />
            </Field>

            <Form.Actions>
              <Button type="reset" variant="secondary">
                {t("pages.components.form.actions.reset")}
              </Button>
              <Button type="submit">{t("pages.components.form.actions.submit")}</Button>
            </Form.Actions>
          </Form>
        </Card.Content>
      </Card>
    </ComponentExampleSection>
  );
};

export default ComponentFormExample;
