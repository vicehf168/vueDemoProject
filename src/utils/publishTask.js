import request from './request'

export function forwardPublicTask(data) {
    return request({
        url: '/forwardPublicTask',
        method: 'get',
        params: data
    })
}

export function forwardInviteTask(data) {
    return request({
        url: '/forwardInviteTask',
        method: 'get',
        params: data
    })
}

export function queryUserName(data) {
    return request({
        url: '/queryUserName',
        method: 'get',
        params: data
    })
}

export function createSettlementOrder(data) {
    return request({
        url: '/createSettlementOrder',
        method: 'get',
        params: data
    })
}

export function createAcceptanceOrder(data) {
    return request({
        url: '/createAcceptanceOrder',
        method: 'get',
        params: data
    })
}

export function createReviewOrder(data) {
    return request({
        url: '/createReviewOrder',
        method: 'get',
        params: data
    })
}

export function createPayOrder(data) {
    return request({
        url: '/createPayOrder',
        method: 'get',
        params: data
    })
}

export function createXvReviewOrder(data) {
    return request({
        url: '/createXvReviewOrder',
        method: 'get',
        params: data
    })
}

export function createXvFeeIssueOrder(data) {
    return request({
        url: '/createXvFeeIssueOrder',
        method: 'get',
        params: data
    })
}
