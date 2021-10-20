import prismaClient from '../prisma/index';

class ProfileUserService {
    async execute(user_id: string){
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        return user;
    }

}

export {ProfileUserService};