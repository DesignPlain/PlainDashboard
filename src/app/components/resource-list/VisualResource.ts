import { ResourceType as GCP_ResourceType } from 'src/app/Models/codegen/gcp/ResourceType';
import { ResourceType as AWS_ResourceType } from 'src/app/Models/codegen/aws/ResourceType';
import { ProviderType } from 'src/app/enum/ProviderType';

export class VisualResource {
  constructor(
    public Titile: string,
    public ProviderType: ProviderType,
    public ResourceType: GCP_ResourceType | AWS_ResourceType,
    public iconSrc: string
  ) { }
}
