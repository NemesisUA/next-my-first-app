This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## API emulation

to emulate API I have created a _data folder with a db.json

to be able to use it, you have to have a json server installed on your computer globally:
```
npm install json-server -g
```
you can run json server by typing
```
json-server --watch --port 4000 ./_data/db.json
```

now data can be fetched at adress http://localhost:4000/tickets

