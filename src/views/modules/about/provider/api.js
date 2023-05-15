import env from "@/app/env";
export default {
    index: env.envDomain.concat('/admin/abouts'),
    store: env.envDomain.concat('/admin/abouts/store'),
    edit: env.envDomain.concat('/admin/abouts/edit/'),
    update: env.envDomain.concat('/admin/abouts/update/'),
}