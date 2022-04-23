import NextAuth from "next-auth/next";
import Auth0Provider from "next-auth/providers/auth0";
import GitHub from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

const options = {
	providers: [
		Auth0Provider({
			clientId: process.env.AUTH0_CLIENT_ID,
			clientSecret: process.env.AUTH0_CLIENT_SECRET,
			issuer: process.env.AUTH0_ISSUER,
		}),
		GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
  pages: {
    signIn: "/signin",
  },
	adapter: MongoDBAdapter(clientPromise)
	// secret: process.env.NEXTAUTH_SECRET,
};

export default (req, res) => NextAuth(req, res, options);
