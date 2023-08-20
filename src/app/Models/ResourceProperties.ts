import { InputType } from '../enum/InputType';
import { ResourceType } from '../enum/ResourceType';

export class ResourceProperties {
  public static propertiesMap: Map<ResourceType, Map<string, InputType>> =
    new Map([
      [
        ResourceType.EC2,
        new Map([
          ['Family', InputType.String],
          ['Instance Type', InputType.String],
          ['vCPUs', InputType.Number],
          ['Memory (GiB)', InputType.Number],
          ['Secrets', InputType.File],
          ['Enable SSH', InputType.CheckBox],
          ['IPV6 Support', InputType.CheckBox],
        ]),
      ],
      [
        ResourceType.LoadBalancer,
        new Map([
          ['IP', InputType.String],
          ['Code', InputType.String],
        ]),
      ],
    ]);
}
