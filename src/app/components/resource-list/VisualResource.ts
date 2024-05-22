
import { AWS_ResourceType } from 'src/app/Models/Codegen/aws_resources/ResourceType';
import { GCP_ResourceType } from 'src/app/Models/Codegen/gcp_resources/ResourceType';
import { ProviderType } from 'src/app/enum/ProviderType';

export class VisualResource {
  constructor(
    public Titile: string,
    public ProviderType: ProviderType,
    public ResourceType: GCP_ResourceType | AWS_ResourceType,
    public iconSrc: string
  ) {}
}
