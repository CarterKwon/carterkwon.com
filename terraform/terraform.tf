terraform {
  # Terraform version at the time of writing this post
  required_version = ">= 1.0.3"

  backend "s3" {
    bucket = "carterkwon-terraform"
    key    = "carterkwon.com/terraform.tfstate"
    region = "us-east-1"
  }

  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
    null = {
      source = "hashicorp/null"
    }
  }
}

# Terraform AWS Provider
# Docs: https://www.terraform.io/docs/providers/aws/index.html
provider "aws" {
  region = var.aws_region
}
