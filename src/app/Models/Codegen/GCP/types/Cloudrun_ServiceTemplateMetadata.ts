import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrun_ServiceTemplateMetadata {
  /*
Map of string keys and values that can be used to organize and categorize
(scope and select) objects. May match selectors of replication controllers
and routes.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Name must be unique within a Google Cloud project and region.
Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
*/
  Name?: string;

  /*
In Cloud Run the namespace must be equal to either the
project ID or project number.
*/
  Namespace?: string;

  /*
(Output)
An opaque value that represents the internal version of this object that
can be used by clients to determine when objects have changed. May be used
for optimistic concurrency, change detection, and the watch operation on a
resource or set of resources. They may only be valid for a
particular resource or set of resources.
*/
  ResourceVersion?: string;

  /*
(Output)
SelfLink is a URL representing this object.
*/
  SelfLink?: string;

  /*
(Output)
UID is a unique id generated by the server on successful creation of a resource and is not
allowed to change on PUT operations.
*/
  Uid?: string;

  /*
Annotations is a key value map stored with a resource that
may be set by external tools to store and retrieve arbitrary metadata. More
info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
--Note--: The Cloud Run API may add additional annotations that were not provided in your config.
If the provider plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.
Annotations with `run.googleapis.com/` and `autoscaling.knative.dev` are restricted. Use the following annotation
keys to configure features on a Service:
- `run.googleapis.com/binary-authorization-breakglass` sets the [Binary Authorization breakglass](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--breakglass).
- `run.googleapis.com/binary-authorization` sets the [Binary Authorization](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--binary-authorization).
- `run.googleapis.com/client-name` sets the client name calling the Cloud Run API.
- `run.googleapis.com/custom-audiences` sets the [custom audiences](https://cloud.google.com/sdk/gcloud/reference/alpha/run/deploy#--add-custom-audiences)
that can be used in the audience field of ID token for authenticated requests.
- `run.googleapis.com/description` sets a user defined description for the Service.
- `run.googleapis.com/ingress` sets the [ingress settings](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--ingress)
for the Service. For example, `"run.googleapis.com/ingress" = "all"`.
- `run.googleapis.com/launch-stage` sets the [launch stage](https://cloud.google.com/run/docs/troubleshooting#launch-stage-validation)
when a preview feature is used. For example, `"run.googleapis.com/launch-stage": "BETA"`
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  /*
(Output)
A sequence number representing a specific generation of the desired state.
*/
  Generation?: number;
}

export function Cloudrun_ServiceTemplateMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name must be unique within a Google Cloud project and region.\nIs required when creating resources. Name is primarily intended\nfor creation idempotence and configuration definition. Cannot be updated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Namespace",
      "In Cloud Run the namespace must be equal to either the\nproject ID or project number.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResourceVersion",
      "(Output)\nAn opaque value that represents the internal version of this object that\ncan be used by clients to determine when objects have changed. May be used\nfor optimistic concurrency, change detection, and the watch operation on a\nresource or set of resources. They may only be valid for a\nparticular resource or set of resources.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SelfLink",
      "(Output)\nSelfLink is a URL representing this object.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uid",
      "(Output)\nUID is a unique id generated by the server on successful creation of a resource and is not\nallowed to change on PUT operations.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Annotations",
      'Annotations is a key value map stored with a resource that\nmay be set by external tools to store and retrieve arbitrary metadata. More\ninfo: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations\n**Note**: The Cloud Run API may add additional annotations that were not provided in your config.\nIf the provider plan shows a diff where a server-side annotation is added, you can add it to your config\nor apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.\nAnnotations with `run.googleapis.com/` and `autoscaling.knative.dev` are restricted. Use the following annotation\nkeys to configure features on a Service:\n- `run.googleapis.com/binary-authorization-breakglass` sets the [Binary Authorization breakglass](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--breakglass).\n- `run.googleapis.com/binary-authorization` sets the [Binary Authorization](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--binary-authorization).\n- `run.googleapis.com/client-name` sets the client name calling the Cloud Run API.\n- `run.googleapis.com/custom-audiences` sets the [custom audiences](https://cloud.google.com/sdk/gcloud/reference/alpha/run/deploy#--add-custom-audiences)\nthat can be used in the audience field of ID token for authenticated requests.\n- `run.googleapis.com/description` sets a user defined description for the Service.\n- `run.googleapis.com/ingress` sets the [ingress settings](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--ingress)\nfor the Service. For example, `"run.googleapis.com/ingress" = "all"`.\n- `run.googleapis.com/launch-stage` sets the [launch stage](https://cloud.google.com/run/docs/troubleshooting#launch-stage-validation)\nwhen a preview feature is used. For example, `"run.googleapis.com/launch-stage": "BETA"`\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Generation",
      "(Output)\nA sequence number representing a specific generation of the desired state.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "Map of string keys and values that can be used to organize and categorize\n(scope and select) objects. May match selectors of replication controllers\nand routes.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
