const Yup = require('yup')
const glob = require('glob')
const fm = require('front-matter')
const statuses = require('./statuses')
const fs = require('fs/promises')
const { promisify } = require('util')
const g = promisify(glob)

const snapshotIdRegex = /^https?:\/\/(snapshot.org).*\/([A-z0-9]{7,})$/

const commonValidationSchema = Yup.object().shape({
  file: Yup.string().required(),
  title: Yup.string().required(),
  type: Yup.string().oneOf(['Meta-Governance', 'Governance']).required(),
  proposal: Yup.string().matches(snapshotIdRegex),
  status: Yup.string().oneOf(statuses),
  author: Yup.string().required(),
  network: Yup.string()
    .oneOf(['Ethereum', 'Optimism', 'Ethereum & Optimism', 'n/a'])
    .required(),
  implementor: Yup.string().nullable(),
  release: Yup.string().nullable(),
  created: Yup.date().nullable(),
  updated: Yup.date().nullable(),
  requires: Yup.mixed().nullable(),
  'discussions-to': Yup.string().nullable(),
})

const dipValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      dip: Yup.number().required(),
      network: Yup.string().required(),
    }),
  )
  .noUnknown()
  .strict()

;(async () => {
  try {
    const dips = await g('./content/dips/*.md')

    // DIP
    await Promise.all(
      dips.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        const castValues = dipValidationSchema.cast({ file, ...attributes })
        return await dipValidationSchema.validate(castValues)
      }),
    )
  } catch (error) {
    console.log(error)
    console.error({
      value: error.value,
      errors: error.errors,
    })
    process.exit(1)
  }
})()
