variable "aws_region" {
  description = "The AWS region to create resources in."
  default     = "us-east-1"
}

variable "tags" {
  description = "Resource tags"
  type        = map(string)
}

variable "app_domain" {
  description = "Domain of the app"
  type        = string
}
