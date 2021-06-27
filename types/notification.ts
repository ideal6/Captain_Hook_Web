export default interface Notification {
  id?: number
  name: string
  condition: string
  histories: []
  dependentWebhooks: string[]
  methods: {
    name: string
    type: string
    key: string
  }[]
  createdAt: string
  updatedAt: string
}
