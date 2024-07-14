import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface InstanceArgs {
  // A map contains the attributes of the instance. Check the [doc](https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html#API_RegisterInstance_RequestSyntax) for the supported attributes and syntax.
  attributes?: Map<string, string>;

  // The ID of the service instance.
  instanceId?: string;

  // The ID of the service that you want to use to create the instance.
  serviceId?: string;
}
export class Instance extends Resource {
  // A map contains the attributes of the instance. Check the [doc](https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html#API_RegisterInstance_RequestSyntax) for the supported attributes and syntax.
  public attributes?: Map<string, string>;

  // The ID of the service instance.
  public instanceId?: string;

  // The ID of the service that you want to use to create the instance.
  public serviceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "The ID of the service instance.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceId",
        "The ID of the service that you want to use to create the instance.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "attributes",
        "A map contains the attributes of the instance. Check the [doc](https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html#API_RegisterInstance_RequestSyntax) for the supported attributes and syntax.",
        InputType_Map_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
