export default interface Webhook {
  id?: number
  name: string
  type: string | 'github' | 'custom'
  fields: {
    id?: number
    name: string
    description: string
    field: string
  }[]
  createdAt: string
  updatedAt: string
}
