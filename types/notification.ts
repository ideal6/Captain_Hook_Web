export default interface Notification {
  id?: number
  name: string
  condition: string
  histories: []
  dependentWebhooks: string[]
  methods: string[]
  createdAt: Date
  updatedAt: Date
}
