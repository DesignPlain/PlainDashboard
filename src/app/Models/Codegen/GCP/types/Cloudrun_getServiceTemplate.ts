import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceTemplateMetadata,
  Cloudrun_getServiceTemplateMetadata_GetTypes,
} from "./Cloudrun_getServiceTemplateMetadata";
import {
  Cloudrun_getServiceTemplateSpec,
  Cloudrun_getServiceTemplateSpec_GetTypes,
} from "./Cloudrun_getServiceTemplateSpec";

export interface Cloudrun_getServiceTemplate {
  /*
Optional metadata for this Revision, including labels and annotations.
Name will be generated by the Configuration. To set minimum instances
for this revision, use the "autoscaling.knative.dev/minScale" annotation
key. To set maximum instances for this revision, use the
"autoscaling.knative.dev/maxScale" annotation key. To set Cloud SQL
connections for the revision, use the "run.googleapis.com/cloudsql-instances"
annotation key.
*/
  Metadatas?: Array<Cloudrun_getServiceTemplateMetadata>;

  // RevisionSpec holds the desired state of the Revision (from the client).
  Specs?: Array<Cloudrun_getServiceTemplateSpec>;
}

export function Cloudrun_getServiceTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Metadatas",
      'Optional metadata for this Revision, including labels and annotations.\nName will be generated by the Configuration. To set minimum instances\nfor this revision, use the "autoscaling.knative.dev/minScale" annotation\nkey. To set maximum instances for this revision, use the\n"autoscaling.knative.dev/maxScale" annotation key. To set Cloud SQL\nconnections for the revision, use the "run.googleapis.com/cloudsql-instances"\nannotation key.',
      Cloudrun_getServiceTemplateMetadata_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Specs",
      "RevisionSpec holds the desired state of the Revision (from the client).",
      Cloudrun_getServiceTemplateSpec_GetTypes(),
      true,
      false,
    ),
  ];
}
