resource "null_resource" "example" {
  triggers = {
    "value" = "An example resource that does nothing!"
  }
}
