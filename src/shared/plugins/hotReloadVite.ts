// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require('child_process')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

export function ReloadScriptPlugin() {
  return {
    name: 'reload-script',
    handleHotUpdate: async ({ file }: { file: string }) => {
      // Specify the path to your JSON file
      const targetFile = path.resolve(__dirname, '../../../public/static.json')

      // Check if the updated file is the target JSON file
      if (file === targetFile) {
        exec('npm run build', function (err: unknown, stdout: unknown) {
          console.log('hot reload')

          if (err) {
            console.error(err)
          }

          console.log(stdout)
        })
      }
    },
  }
}
