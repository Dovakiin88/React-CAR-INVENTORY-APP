let token = '5e19afb4a979889dcc17700830687c423e1742fe75c65c46'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://tundra-chartreuse-icebreaker.glitch.me/api/stock`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://tundra-chartreuse-icebreaker.glitch.me/api/stock`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://tundra-chartreuse-icebreaker.glitch.me/api/stock/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`https://tundra-chartreuse-icebreaker.glitch.me/api/stock/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}
