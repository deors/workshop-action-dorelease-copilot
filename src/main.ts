import * as core from '@actions/core'
import { wait } from './wait'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const relVer: string = core.getInput('release-version')
    const tgtEnv: string = core.getInput('target-environment')

    core.info(`Requested release version: ${relVer}`)
    core.info(`Target environment: ${tgtEnv}`)

    // Perform the actual release steps
    await wait(1)

    // Set outputs for other workflow steps to use
    core.setOutput('time', new Date().toTimeString())
    core.setOutput('release-status', 'success') // put the actual status here
    core.setOutput('target-url', 'https://example.com') // put the actual URL here
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
