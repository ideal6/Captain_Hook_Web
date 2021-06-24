export default interface Webhook {
  id?: number
  name: string
  type: string | 'github' | 'custom'
  fields: {
    name: string
    description: string
    field: string
  }[]
  createdAt: Date
  updatedAt: Date
}
