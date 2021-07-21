import React from 'react'
import { useTypesSelector } from '../hooks/useTypedSelector'

const UserList: React.FC = () => {
  const {users, error, loading} = useTypesSelector(state => state.user)

  return (
    <div>
       привет
    </div>
  )
}

export default UserList
