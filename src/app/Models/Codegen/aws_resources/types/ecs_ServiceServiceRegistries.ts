import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_ServiceServiceRegistries {
  // Container name value, already specified in the task definition, to be used for your service discovery service.
  containerName?: string;

  // Port value, already specified in the task definition, to be used for your service discovery service.
  containerPort?: number;

  // Port value used if your Service Discovery service specified an SRV record.
  port?: number;

  // ARN of the Service Registry. The currently supported service registry is Amazon Route 53 Auto Naming Service(`aws.servicediscovery.Service`). For more information, see [Service](https://docs.aws.amazon.com/Route53/latest/APIReference/API_autonaming_Service.html)
  registryArn?: string;
}

export function ecs_ServiceServiceRegistries_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "containerName",
      "Container name value, already specified in the task definition, to be used for your service discovery service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "containerPort",
      "Port value, already specified in the task definition, to be used for your service discovery service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port value used if your Service Discovery service specified an SRV record.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "registryArn",
      "ARN of the Service Registry. The currently supported service registry is Amazon Route 53 Auto Naming Service(`aws.servicediscovery.Service`). For more information, see [Service](https://docs.aws.amazon.com/Route53/latest/APIReference/API_autonaming_Service.html)",
      [],
      true,
      false,
    ),
  ];
}
