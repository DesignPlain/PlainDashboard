import { getJobTemplateTemplateContainerEnvValueSource } from "./getJobTemplateTemplateContainerEnvValueSource";

export interface getJobTemplateTemplateContainerEnv {
  // The name of the Cloud Run v2 Job.
  Name?: string;

  // Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes
  Value?: string;

  // Source for the environment variable's value.
  ValueSources?: Array<getJobTemplateTemplateContainerEnvValueSource>;
}
