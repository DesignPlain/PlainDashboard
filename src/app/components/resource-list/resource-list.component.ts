import { Component } from '@angular/core';
import { AddComponentService } from 'src/app/services/add-component.service';

import { VisualResource } from './VisualResource';
import { ProviderType } from 'src/app/enum/ProviderType';
import { GCP_ResourceType } from 'src/app/Models/Codegen/gcp_resources/ResourceType';
import { AWS_ResourceType } from 'src/app/Models/Codegen/aws_resources/ResourceType';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent {
  providerType = ProviderType;
  viewAWS = false;
  viewGCP = false;
  viewOnPremise = false;

  public readonly VisualResources = new Map<ProviderType, VisualResource[]>([
    [
      ProviderType.AWS,
      [
        new VisualResource(
          'EC2 Instance',
          ProviderType.AWS,
          AWS_ResourceType.EC2_INSTANCE,
          '../../../assets/Arch_Amazon-EC2_64.png'
        ),

        new VisualResource(
          'VPC Network',
          ProviderType.AWS,
          AWS_ResourceType.EC2_VPC,
          '../../../assets/Arch_Amazon-Virtual_Private_Cloud_64.png'
        ),
        new VisualResource(
          'VPC Subnet',
          ProviderType.AWS,
          AWS_ResourceType.EC2_SUBNET,
          '../../../assets/Arch_Amazon-Subnet_64.png'
        ),
        new VisualResource(
          'S3 Bucket',
          ProviderType.AWS,
          AWS_ResourceType.S3_BUCKET,
          '../../../assets/Arch_Amazon-Simple_Storage_Service_64.png'
        ),
        new VisualResource(
          'Lambda Function',
          ProviderType.AWS,
          AWS_ResourceType.LAMBDA_FUNCTION,
          '../../../assets/Arch_Amazon-Lambda_64.png'
        ),
        // new VisualResource(
        //   'SQS Queue',
        //   ProviderType.AWS,
        //   AWS_ResourceType.SQS_QUEUE,
        //   '../../../assets/Arch_Amazon-Simple-Queue-Service_64.png'
        // ),
        new VisualResource(
          'ELB Loadbalancer',
          ProviderType.AWS,
          AWS_ResourceType.ELB_LOADBALANCER,
          '../../../assets/Arch_Amazon-Elastic_Load_Balancer_64.png'
        ),
      ],
    ],
    [
      ProviderType.GCP,
      [
        new VisualResource(
          'Compute Instance',
          ProviderType.GCP,
          GCP_ResourceType.COMPUTE_INSTANCE,
          '../../../assets/GCPIcons/compute_engine.png'
        ),

        new VisualResource(
          'VPC',
          ProviderType.GCP,
          GCP_ResourceType.COMPUTE_NETWORK,

          '../../../assets/GCPIcons/virtual_private_cloud.png'
        ),
        new VisualResource(
          'Compute Subnet',
          ProviderType.GCP,
          GCP_ResourceType.COMPUTE_SUBNETWORK,
          '../../../assets/GCPIcons/network_topology.png'
        ),
        new VisualResource(
          'Cloud Storage',
          ProviderType.GCP,
          GCP_ResourceType.STORAGE_BUCKET,
          '../../../assets/GCPIcons/cloud_storage.png'
        ),
        new VisualResource(
          'Cloud Function',
          ProviderType.GCP,
          GCP_ResourceType.CLOUDFUNCTIONS_FUNCTION,
          '../../../assets/GCPIcons/cloud_functions.png'
        ),
        new VisualResource(
          'Cloud SQL',
          ProviderType.GCP,
          GCP_ResourceType.SQL_DATABASEINSTANCE,
          '../../../assets/GCPIcons/cloud_sql.png'
        ),
        new VisualResource(
          'Load Balancer',
          ProviderType.GCP,
          GCP_ResourceType.COMPUTE_FORWARDINGRULE,
          '../../../assets/GCPIcons/cloud_load_balancing.png'
        ),
      ],
    ],
  ]);

  constructor(private _addComponentService: AddComponentService) {}
  addComponent(resource: VisualResource) {
    //console.log(componentName);
    this._addComponentService.components.next(resource);
  }

  toggleAWS() {
    this.viewAWS = !this.viewAWS;
  }
}
