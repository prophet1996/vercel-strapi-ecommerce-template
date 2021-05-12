module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  protocol:env.int('PROTOCOL', "http"),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '450b33208c6ca2f9308ffd3d42611b6a'),
    },
  },
});
