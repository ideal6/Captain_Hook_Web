export default interface Notification {
  id?: number
  name: string
  condition: string
  histories: []
  dependentWebhooks: {
    id: number
    name: string
    type: string
    userId: string
    updatedAt: string
  }[]
  methods: {
    name: string
    type: string
    key: string
  }[]
  createdAt: string
  updatedAt: string
}
