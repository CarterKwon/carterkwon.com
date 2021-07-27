variable "aws_region" {
  description = "The AWS region to create resources in."
  default     = "us-east-1"
}

variable "tags" {
  description = "resource tags"
  type        = map(string)
}
