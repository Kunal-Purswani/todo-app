import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],

    secret: process.env.SECRET,
    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        async session({ session, token, user }) {
            const str = session.user.name.split(" ")[0];
            session.user.username = str.charAt(0).toUpperCase() + str.slice(1);
            session.user.uid = token.sub;
            return session;
        }
    }
})