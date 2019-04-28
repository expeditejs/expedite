import mutations from '@/store/authentication/authentication.mutations'

const user = {
  displayName: 'Atul Singh',
  photoUrl: 'https://expeditejs.net/images/atul.jpg',
  email: 'atul@expeditejs.net'
}

describe('authentication module mutation', () => {
  describe('setUser', () => {
    it('should set the user to the given parameter', () => {
      const state = {
        user: null
      }
      mutations.setUser(state, user)
      expect(state).toEqual({
        user
      })
    })
  })
})
