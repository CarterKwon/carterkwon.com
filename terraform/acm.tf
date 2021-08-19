resource "aws_acm_certificate" "acm_certificate" {
  domain_name       = var.app_domain
  validation_method = "DNS"
  tags              = var.tags

  lifecycle {
    create_before_destroy = true
  }
}
